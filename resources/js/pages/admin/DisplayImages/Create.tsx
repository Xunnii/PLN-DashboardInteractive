import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler, ChangeEvent, useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';

interface FormData {
    title: string;
    image: File | null;
    description: string;
    order: number;
}

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
        title: 'Tambah Gambar',
        href: '/admin/display-images/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        title: '',
        image: null,
        description: '',
        order: 0,
    });

    const [preview, setPreview] = useState<string | null>(null);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // Ganti route() dengan string
        post('/admin/display-images');
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

    const handleRemoveImage = () => {
        setData('image', null);
        setPreview(null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Gambar Display" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Tambah Gambar Display
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Upload gambar baru untuk ditampilkan di TV Display
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
                                    Gambar <span className="text-destructive">*</span>
                                </label>
                                {!preview ? (
                                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-sidebar-border rounded-xl cursor-pointer bg-muted/50 hover:bg-muted transition-colors">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="h-12 w-12 text-muted-foreground mb-3" />
                                            <p className="mb-2 text-sm text-foreground">
                                                <span className="font-semibold">Klik untuk upload</span> atau drag and drop
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                PNG, JPG, GIF (MAX. 2MB)
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                ) : (
                                    <div className="relative w-full h-64 rounded-xl overflow-hidden border border-sidebar-border">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="absolute top-2 right-2 p-2 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                )}
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

                            {/* Order */}
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
                                <p className="text-xs text-muted-foreground mt-1">
                                    Gambar dengan urutan lebih kecil akan ditampilkan terlebih dahulu
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Gambar'}
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