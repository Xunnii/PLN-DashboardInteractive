import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type PageProps } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Trash2, Plus, Video as VideoIcon, Play } from 'lucide-react';

interface DisplayVideo {
    id: number;
    title: string;
    video_path: string;
    thumbnail_path?: string;
    description: string | null;
    duration?: number; // dalam detik
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface Props extends PageProps {
    videos: DisplayVideo[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Kelola Video Display',
        href: '/admin/display-videos',
    },
];

export default function Index({ auth, videos }: Props) {
    const handleDelete = (id: number, title: string): void => {
        if (confirm(`Yakin ingin menghapus video "${title}"?`)) {
            router.delete(`/admin/display-videos/${id}`, {
                preserveScroll: true,
            });
        }
    };

    const handleToggleActive = (id: number, currentStatus: boolean): void => {
        router.patch(
            `/admin/display-videos/${id}`,
            { is_active: !currentStatus },
            { preserveScroll: true }
        );
    };

    // Format durasi video
    const formatDuration = (seconds: number | undefined) => {
        if (!seconds) return '--:--';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Video Display" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Kelola Video Display
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Atur video yang akan ditampilkan di TV Display
                        </p>
                    </div>
                    <Link
                        href="/admin/display-videos/create"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                        Tambah Video
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <VideoIcon className="h-10 w-10 text-primary mb-2" />
                            <p className="text-3xl font-bold text-foreground">{videos.length}</p>
                            <p className="text-sm text-muted-foreground">Total Video</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">
                                {videos.filter(video => video.is_active).length}
                            </p>
                            <p className="text-sm text-muted-foreground">Video Aktif</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                            </div>
                            <p className="text-3xl font-bold text-foreground">
                                {videos.filter(video => !video.is_active).length}
                            </p>
                            <p className="text-sm text-muted-foreground">Tidak Aktif</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>
                </div>

                {/* Videos Grid */}
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card md:min-h-min dark:border-sidebar-border">
                    <div className="p-6">
                        {videos.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <VideoIcon className="h-16 w-16 text-muted-foreground/50 mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Belum ada video
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Mulai dengan menambahkan video pertama untuk display TV
                                </p>
                                <Link
                                    href="/admin/display-videos/create"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    <Plus className="h-4 w-4" />
                                    Tambah Video Pertama
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {videos.map((video) => (
                                    <div
                                        key={video.id}
                                        className="group relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-background transition-all hover:shadow-lg dark:border-sidebar-border"
                                    >
                                        {/* Video Thumbnail */}
                                        <div className="relative aspect-video overflow-hidden bg-muted">
                                            <div className="relative h-full w-full">
                                                {video.thumbnail_path ? (
                                                    <img
                                                        src={`/storage/${video.thumbnail_path}`}
                                                        alt={video.title}
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                                        <VideoIcon className="h-16 w-16 text-gray-400" />
                                                    </div>
                                                )}

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                                                    <a
                                                        href={`/storage/${video.video_path}`}
                                                        target="_blank"
                                                        className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"
                                                    >
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                                                            <Play className="h-6 w-6 text-gray-900 ml-1" fill="currentColor" />
                                                        </div>
                                                    </a>
                                                </div>

                                                {/* Duration Badge */}
                                                {video.duration && (
                                                    <div className="absolute bottom-3 right-3">
                                                        <div className="rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                                            {formatDuration(video.duration)}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Status Badge */}
                                                <div className="absolute top-3 right-3">
                                                    <button
                                                        onClick={() => handleToggleActive(video.id, video.is_active)}
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${video.is_active
                                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                                            : 'bg-gray-500 text-white hover:bg-gray-600'
                                                            }`}
                                                    >
                                                        {video.is_active ? 'Aktif' : 'Nonaktif'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                                {video.description || 'Tidak ada deskripsi'}
                                            </p>

                                            {/* File Info */}
                                            <div className="mb-4">
                                                <a
                                                    href={`/storage/${video.video_path}`}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    <VideoIcon className="h-3 w-3" />
                                                    <span className="truncate max-w-[200px]">
                                                        {video.video_path.split('/').pop()}
                                                    </span>
                                                </a>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/admin/display-videos/${video.id}/edit`}
                                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(video.id, video.title)}
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