import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, Link, router } from '@inertiajs/react';
import { FormEventHandler, ChangeEvent, useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';

interface DisplayImage {
    id: number;
    title: string;
    image_path: string;
    description: string | null;
    is_active: boolean;
    order: number;
}

interface Props {
    image: DisplayImage;
}

interface FormData {
    title: string;
    image: File | null;
    description: string;
    order: number;
    is_active: boolean;
    _method: string;
}

export default function Edit({ image }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Kelola Gambar Display',
            href: '/admin/display-images',
        },
        {
            title: 'Edit Gambar',
            href: `/admin/display-images/${image.id}/edit`,
        },
    ];

    const { data, setData, post, processing, errors } = useForm<FormData>({
        title: image.title,
        image: null,
        description: image.description || '',
        order: image.order,
        is_active: image.is_active,
        _method: 'PUT',
    });

    const [preview, setPreview] = useState<string | null>(
        image.image_path ? `/storage/${image.image_path}` : null
    );

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // Use post but with _method: PUT because Inertia/Laravel handles file uploads better with POST
        post(`/admin/display-images/${image.id}`);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setData('image', file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveChange = () => {
        setData('image', null);
        // If there was an original image, revert to it. 
        // Or if we want to allow "removing" image (nullable), we need different logic.
        // But schema says image is required on create, nullable on update (if not changing).
        // So here we likely just want to cancel the *new* file selection.
        setPreview(image.image_path ? `/storage/${image.image_path}` : null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Gambar Display" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Edit Gambar Display
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Perbarui informasi gambar display
                        </p>
                    </div>
                    <Link
                        href="/admin/display-images"
                        className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                    </Link>
                </div>

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card md:min-h-min dark:border-sidebar-border">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="max-w-2xl mx-auto space-y-6">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Gambar
                                </label>
                                <div className="space-y-4">
                                    <div className="relative w-full h-64 rounded-xl overflow-hidden border border-sidebar-border bg-muted">
                                        {preview ? (
                                            <>
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* If user selected a new file, show cancel button to revert */}
                                                {data.image && (
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveChange}
                                                        className="absolute top-2 right-2 p-2 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                                                        title="Batalkan perubahan gambar"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <label className="flex items-center justify-center w-full p-4 border-2 border-dashed border-sidebar-border rounded-xl cursor-pointer bg-muted/30 hover:bg-muted transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Upload className="h-5 w-5 text-muted-foreground" />
                                            <span className="text-sm font-medium text-foreground">
                                                Ganti Gambar (Opsional)
                                            </span>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Biarkan kosong jika tidak ingin mengubah gambar. Max 2MB.
                                    </p>
                                </div>
                                {errors.image && (
                                    <p className="text-sm text-destructive mt-1">{errors.image}</p>
                                )}
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Judul <span className="text-destructive">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Masukkan judul gambar"
                                />
                                {errors.title && (
                                    <p className="text-sm text-destructive mt-1">{errors.title}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Deskripsi
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                    placeholder="Masukkan deskripsi gambar (opsional)"
                                />
                            </div>

                            {/* Order and Status Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Urutan <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        value={data.order}
                                        onChange={(e) => setData('order', parseInt(e.target.value) || 0)}
                                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        placeholder="0"
                                        min="0"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Status
                                    </label>
                                    <div className="flex items-center gap-2 h-[42px]">
                                        <button
                                            type="button"
                                            onClick={() => setData('is_active', !data.is_active)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${data.is_active ? 'bg-primary' : 'bg-input'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.is_active ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                        <span className="text-sm text-foreground">
                                            {data.is_active ? 'Aktif' : 'Tidak Aktif'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Gambar dengan urutan lebih kecil akan ditampilkan terlebih dahulu
                            </p>


                            {/* Actions */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </button>
                                <Link
                                    href="/admin/display-images"
                                    className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    Batal
                                </Link>
                            </div>
                        </div>
                    </form>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10 pointer-events-none" />
                </div>
            </div>
        </AppLayout>
    );
}
