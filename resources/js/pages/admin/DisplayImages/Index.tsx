import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Trash2, Plus, Image as ImageIcon } from 'lucide-react';

interface DisplayImage {
    id: number;
    title: string;
    image_path: string;
    description: string | null;
    is_active: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    images: DisplayImage[];
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
];

export default function Index({ images }: Props) {
    const handleDelete = (id: number, title: string): void => {
        if (confirm(`Yakin ingin menghapus gambar "${title}"?`)) {
            // Ganti route() dengan string langsung
            router.delete(`/admin/display-images/${id}`, {
                preserveScroll: true,
            });
        }
    };

    const handleToggleActive = (id: number, currentStatus: boolean): void => {
        // Ganti route() dengan string langsung
        router.patch(
            `/admin/display-images/${id}`,
            { is_active: !currentStatus },
            { preserveScroll: true }
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Gambar Display" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Kelola Gambar Display
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Atur gambar yang akan ditampilkan di TV Display
                        </p>
                    </div>
                    <Link
                        href="/admin/display-images/create"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Gambar
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <ImageIcon className="h-10 w-10 text-primary mb-2" />
                            <p className="text-3xl font-bold text-foreground">{images.length}</p>
                            <p className="text-sm text-muted-foreground">Total Gambar</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">
                                {images.filter(img => img.is_active).length}
                            </p>
                            <p className="text-sm text-muted-foreground">Gambar Aktif</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">
                                {images.filter(img => !img.is_active).length}
                            </p>
                            <p className="text-sm text-muted-foreground">Tidak Aktif</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>
                </div>

                {/* Images Grid */}
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card md:min-h-min dark:border-sidebar-border">
                    <div className="p-6">
                        {images.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <ImageIcon className="h-16 w-16 text-muted-foreground/50 mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Belum ada gambar
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Mulai dengan menambahkan gambar pertama untuk display TV
                                </p>
                                <Link
                                    href="/admin/display-images/create"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    <Plus className="h-4 w-4" />
                                    Tambah Gambar Pertama
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map((image) => (
                                    <div
                                        key={image.id}
                                        className="group relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-background transition-all hover:shadow-lg dark:border-sidebar-border"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-video overflow-hidden bg-muted">
                                            <img
                                                src={`/storage/${image.image_path}`}
                                                alt={image.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            {/* Status Badge */}
                                            <div className="absolute top-3 right-3">
                                                <button
                                                    onClick={() => handleToggleActive(image.id, image.is_active)}
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${image.is_active
                                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                                        : 'bg-gray-500 text-white hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {image.is_active ? 'Aktif' : 'Nonaktif'}
                                                </button>
                                            </div>
                                            {/* Order Badge */}
                                            <div className="absolute top-3 left-3">
                                                <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                                    #{image.order}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
                                                {image.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                                {image.description || 'Tidak ada deskripsi'}
                                            </p>

                                            {/* Actions */}
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/admin/display-images/${image.id}/edit`}
                                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(image.id, image.title)}
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-destructive px-3 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10 pointer-events-none" />
                </div>
            </div>
        </AppLayout>
    );
}