import AppLayout from '@/layouts/app-layout';
import { Head, useForm, Link } from '@inertiajs/react';
import { PageProps, BreadcrumbItem } from '@/types';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Manajemen Video',
        href: '/admin/display-videos',
    },
    {
        title: 'Tambah Video',
        href: '/admin/display-videos/create',
    },
];

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        video: null as File | null,
        is_active: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/display-videos');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Video" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-200">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-xl font-semibold mb-6">Tambah Video Baru</h2>
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Judul Video
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Masukkan judul video"
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        File Video (Max 50MB)
                                    </label>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={(e) => setData('video', e.target.files ? e.target.files[0] : null)}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    <p className="mt-1 text-xs text-gray-500">Format: MP4, MOV, OGG. Maksimal 50MB.</p>
                                    {errors.video && (
                                        <p className="mt-1 text-sm text-red-600">{errors.video}</p>
                                    )}
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                                    />
                                    <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
                                        Set sebagai video aktif (akan menonaktifkan video lain)
                                    </label>
                                </div>

                                <div className="flex items-center justify-end gap-4 pt-4 border-t">
                                    <Link
                                        href="/admin/display-videos"
                                        className="text-gray-600 hover:text-gray-900 font-medium"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                                    >
                                        {processing ? 'Menyimpan...' : 'Simpan Video'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
