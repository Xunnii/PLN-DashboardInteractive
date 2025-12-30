import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { BarChart3, Radio, Activity, Plus, Pencil, Trash2 } from 'lucide-react';

interface KontainerBawahData {
    id: number;
    label: string;
    value: string;
    icon: string;
    color: string | null;
    type: string;
    status: string | null;
}

interface Props {
    auth: any;
    items: KontainerBawahData[];
    canAdd: boolean;
}

export default function Index({ items, canAdd }: Props) {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Kontainer Bawah',
            href: '/admin/kontainer-bawah',
        },
    ];

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus kartu ini?')) {
            router.delete(`/admin/kontainer-bawah/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Kontainer Bawah" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Kelola Informasi & Statistik
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Atur data yang ditampilkan pada kartu informasi (Maksimal 4 kartu)
                        </p>
                    </div>
                    {canAdd && (
                        <Link
                            href="/admin/kontainer-bawah/create"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                            Tambah Kartu
                        </Link>
                    )}
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <Activity className="h-10 w-10 text-primary mb-2" />
                            <p className="text-3xl font-bold text-foreground">{items.length} / 4</p>
                            <p className="text-sm text-muted-foreground">Kartu Tersedia</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <BarChart3 className="h-10 w-10 text-blue-500 mb-2" />
                            <p className="text-3xl font-bold text-foreground">
                                {items.filter(i => i.type === 'metric').length}
                            </p>
                            <p className="text-sm text-muted-foreground">Tipe Metric</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-card dark:border-sidebar-border">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <Radio className="h-10 w-10 text-green-500 mb-2" />
                            <p className="text-3xl font-bold text-foreground">
                                {items.filter(i => i.type === 'status').length}
                            </p>
                            <p className="text-sm text-muted-foreground">Tipe Status</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10" />
                    </div>
                </div>

                {/* Cards List Grid */}
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card md:min-h-min dark:border-sidebar-border">
                    <div className="p-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <Activity className="h-16 w-16 text-muted-foreground/50 mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Belum ada kartu
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Mulai dengan menambahkan kartu informasi baru
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-background transition-all hover:shadow-lg dark:border-sidebar-border flex flex-col"
                                    >
                                        <div className={`h-2 w-full ${item.color ? item.color.replace('from-', 'bg-').split(' ')[0] : 'bg-gray-500'}`}></div>
                                        <div className="p-5 flex-1 flex flex-col items-center text-center">
                                            <div className="text-3xl mb-3">{item.icon}</div>
                                            <h3 className="text-lg font-bold text-foreground mb-1">{item.value}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{item.label}</p>

                                            <div className="mt-auto pt-3 border-t w-full flex justify-center gap-2">
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-semibold tracking-wider ${item.type === 'status' ?
                                                        (item.status === 'normal' ? 'bg-green-100 text-green-700' :
                                                            item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700')
                                                        : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Actions Overlay */}
                                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={`/admin/kontainer-bawah/${item.id}/edit`}
                                                className="p-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            >
                                                <Pencil className="h-3.5 w-3.5" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-1.5 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </button>
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
