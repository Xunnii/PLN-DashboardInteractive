import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/kontainer-bawah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::index
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:12
 * @route '/admin/kontainer-bawah'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/kontainer-bawah/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::create
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:21
 * @route '/admin/kontainer-bawah/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::store
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:31
 * @route '/admin/kontainer-bawah'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/kontainer-bawah',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::store
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:31
 * @route '/admin/kontainer-bawah'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::store
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:31
 * @route '/admin/kontainer-bawah'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::store
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:31
 * @route '/admin/kontainer-bawah'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::store
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:31
 * @route '/admin/kontainer-bawah'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
export const edit = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/kontainer-bawah/{kontainerBawah}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
edit.url = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontainerBawah: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kontainerBawah: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kontainerBawah: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontainerBawah: typeof args.kontainerBawah === 'object'
                ? args.kontainerBawah.id
                : args.kontainerBawah,
                }

    return edit.definition.url
            .replace('{kontainerBawah}', parsedArgs.kontainerBawah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
edit.get = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
edit.head = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
    const editForm = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
        editForm.get = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::edit
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:53
 * @route '/admin/kontainer-bawah/{kontainerBawah}/edit'
 */
        editForm.head = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::update
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:60
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
export const update = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/kontainer-bawah/{kontainerBawah}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::update
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:60
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
update.url = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontainerBawah: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kontainerBawah: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kontainerBawah: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontainerBawah: typeof args.kontainerBawah === 'object'
                ? args.kontainerBawah.id
                : args.kontainerBawah,
                }

    return update.definition.url
            .replace('{kontainerBawah}', parsedArgs.kontainerBawah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::update
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:60
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
update.put = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::update
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:60
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
    const updateForm = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::update
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:60
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
        updateForm.put = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::destroy
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:76
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
export const destroy = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/kontainer-bawah/{kontainerBawah}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::destroy
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:76
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
destroy.url = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontainerBawah: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kontainerBawah: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kontainerBawah: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontainerBawah: typeof args.kontainerBawah === 'object'
                ? args.kontainerBawah.id
                : args.kontainerBawah,
                }

    return destroy.definition.url
            .replace('{kontainerBawah}', parsedArgs.kontainerBawah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KontainerBawahController::destroy
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:76
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
destroy.delete = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::destroy
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:76
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
    const destroyForm = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\KontainerBawahController::destroy
 * @see app/Http/Controllers/Admin/KontainerBawahController.php:76
 * @route '/admin/kontainer-bawah/{kontainerBawah}'
 */
        destroyForm.delete = (args: { kontainerBawah: string | number | { id: string | number } } | [kontainerBawah: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const kontainerBawah = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default kontainerBawah