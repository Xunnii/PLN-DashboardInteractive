import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft, Save, HelpCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

export default function Create() {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Kontainer Bawah',
            href: '/admin/kontainer-bawah',
        },
        {
            title: 'Tambah Kartu',
            href: '/admin/kontainer-bawah/create',
        },
    ];

    const { data, setData, post, processing, errors } = useForm({
        label: '',
        value: '',
        icon: '',
        color: 'from-blue-600 to-blue-700',
        type: 'metric',
        status: 'normal',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/kontainer-bawah');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Kartu - Kontainer Bawah" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Tambah Kartu Informasi
                        </h1>
                    </div>
                    <Link
                        href="/admin/kontainer-bawah"
                        className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                    </Link>
                </div>

                <div className="relative min-h-[50vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 bg-card md:min-h-min dark:border-sidebar-border">
                    <div className="p-6 max-w-2xl mx-auto">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Tipe Kartu</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setData('type', 'metric')}
                                            className={`p-3 rounded-lg border text-center transition-all ${data.type === 'metric' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-input hover:bg-accent'}`}
                                        >
                                            <span className="block font-semibold">Metric</span>
                                            <span className="text-xs text-muted-foreground">Angka/Nilai dengan Icon</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setData('type', 'status')}
                                            className={`p-3 rounded-lg border text-center transition-all ${data.type === 'status' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-input hover:bg-accent'}`}
                                        >
                                            <span className="block font-semibold">Status Sistem</span>
                                            <span className="text-xs text-muted-foreground">Indikator Normal/Warning/Danger</span>
                                        </button>
                                    </div>
                                    {errors.type && <div className="text-destructive text-xs mt-1">{errors.type}</div>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-foreground mb-1">Label</label>
                                        <input
                                            type="text"
                                            value={data.label}
                                            onChange={e => setData('label', e.target.value)}
                                            placeholder="Contoh: Beban Nasional"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                        {errors.label && <div className="text-destructive text-xs mt-1">{errors.label}</div>}
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-foreground mb-1">Icon (Emoji)</label>
                                        <input
                                            type="text"
                                            value={data.icon}
                                            onChange={e => setData('icon', e.target.value)}
                                            placeholder="(masukan icon emoji)"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                        {errors.icon && <div className="text-destructive text-xs mt-1">{errors.icon}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Value / Nilai</label>
                                    <input
                                        type="text"
                                        value={data.value}
                                        onChange={e => setData('value', e.target.value)}
                                        placeholder="Contoh: 38.2 GW"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                    {errors.value && <div className="text-destructive text-xs mt-1">{errors.value}</div>}
                                </div>

                                {data.type === 'status' ? (
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">Status Indicator</label>
                                        <select
                                            value={data.status}
                                            onChange={e => setData('status', e.target.value)}
                                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="normal">Normal (Green)</option>
                                            <option value="warning">Warning (Yellow)</option>
                                            <option value="danger">Danger (Red)</option>
                                        </select>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1">
                                            Warna Gradient
                                            <span className="ml-2 text-[10px] text-muted-foreground font-normal">(Tailwind CSS Classes)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={data.color}
                                            onChange={e => setData('color', e.target.value)}
                                            placeholder="from-blue-600 to-blue-700"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t">
                                <Link
                                    href="/admin/kontainer-bawah"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    Batal
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                                >
                                    <Save className="h-4 w-4" />
                                    Simpan Kartu
                                </button>
                            </div>
                        </form>
                    </div>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10 -z-10 pointer-events-none" />
                </div>
            </div>
        </AppLayout>
    );
}
