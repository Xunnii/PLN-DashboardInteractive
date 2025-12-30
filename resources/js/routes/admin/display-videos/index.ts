import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/display-videos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::index
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:15
 * @route '/admin/display-videos'
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
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/display-videos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::create
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:24
 * @route '/admin/display-videos/create'
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
* @see \App\Http\Controllers\Admin\DisplayVideoController::store
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:29
 * @route '/admin/display-videos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/display-videos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::store
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:29
 * @route '/admin/display-videos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::store
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:29
 * @route '/admin/display-videos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::store
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:29
 * @route '/admin/display-videos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::store
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:29
 * @route '/admin/display-videos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
export const edit = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/display-videos/{displayVideo}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
edit.url = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayVideo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayVideo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayVideo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayVideo: typeof args.displayVideo === 'object'
                ? args.displayVideo.id
                : args.displayVideo,
                }

    return edit.definition.url
            .replace('{displayVideo}', parsedArgs.displayVideo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
edit.get = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
edit.head = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
    const editForm = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
        editForm.get = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::edit
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:54
 * @route '/admin/display-videos/{displayVideo}/edit'
 */
        editForm.head = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DisplayVideoController::update
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:61
 * @route '/admin/display-videos/{displayVideo}'
 */
export const update = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/display-videos/{displayVideo}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::update
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:61
 * @route '/admin/display-videos/{displayVideo}'
 */
update.url = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayVideo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayVideo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayVideo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayVideo: typeof args.displayVideo === 'object'
                ? args.displayVideo.id
                : args.displayVideo,
                }

    return update.definition.url
            .replace('{displayVideo}', parsedArgs.displayVideo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::update
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:61
 * @route '/admin/display-videos/{displayVideo}'
 */
update.put = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::update
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:61
 * @route '/admin/display-videos/{displayVideo}'
 */
    const updateForm = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::update
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:61
 * @route '/admin/display-videos/{displayVideo}'
 */
        updateForm.put = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DisplayVideoController::destroy
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:97
 * @route '/admin/display-videos/{displayVideo}'
 */
export const destroy = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/display-videos/{displayVideo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::destroy
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:97
 * @route '/admin/display-videos/{displayVideo}'
 */
destroy.url = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayVideo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayVideo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayVideo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayVideo: typeof args.displayVideo === 'object'
                ? args.displayVideo.id
                : args.displayVideo,
                }

    return destroy.definition.url
            .replace('{displayVideo}', parsedArgs.displayVideo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayVideoController::destroy
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:97
 * @route '/admin/display-videos/{displayVideo}'
 */
destroy.delete = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::destroy
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:97
 * @route '/admin/display-videos/{displayVideo}'
 */
    const destroyForm = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayVideoController::destroy
 * @see app/Http/Controllers/Admin/DisplayVideoController.php:97
 * @route '/admin/display-videos/{displayVideo}'
 */
        destroyForm.delete = (args: { displayVideo: number | { id: number } } | [displayVideo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const displayVideos = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default displayVideos