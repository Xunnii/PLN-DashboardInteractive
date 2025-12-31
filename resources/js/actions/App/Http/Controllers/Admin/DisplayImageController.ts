import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/display-images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::index
 * @see app/Http/Controllers/Admin/DisplayImageController.php:15
 * @route '/admin/display-images'
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
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/display-images/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::create
 * @see app/Http/Controllers/Admin/DisplayImageController.php:27
 * @route '/admin/display-images/create'
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
* @see \App\Http\Controllers\Admin\DisplayImageController::store
 * @see app/Http/Controllers/Admin/DisplayImageController.php:41
 * @route '/admin/display-images'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/display-images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::store
 * @see app/Http/Controllers/Admin/DisplayImageController.php:41
 * @route '/admin/display-images'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::store
 * @see app/Http/Controllers/Admin/DisplayImageController.php:41
 * @route '/admin/display-images'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::store
 * @see app/Http/Controllers/Admin/DisplayImageController.php:41
 * @route '/admin/display-images'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::store
 * @see app/Http/Controllers/Admin/DisplayImageController.php:41
 * @route '/admin/display-images'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
export const edit = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/display-images/{displayImage}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
edit.url = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayImage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayImage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayImage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayImage: typeof args.displayImage === 'object'
                ? args.displayImage.id
                : args.displayImage,
                }

    return edit.definition.url
            .replace('{displayImage}', parsedArgs.displayImage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
edit.get = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
edit.head = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
    const editForm = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
        editForm.get = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::edit
 * @see app/Http/Controllers/Admin/DisplayImageController.php:33
 * @route '/admin/display-images/{displayImage}/edit'
 */
        editForm.head = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DisplayImageController::update
 * @see app/Http/Controllers/Admin/DisplayImageController.php:64
 * @route '/admin/display-images/{displayImage}'
 */
export const update = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/display-images/{displayImage}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::update
 * @see app/Http/Controllers/Admin/DisplayImageController.php:64
 * @route '/admin/display-images/{displayImage}'
 */
update.url = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayImage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayImage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayImage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayImage: typeof args.displayImage === 'object'
                ? args.displayImage.id
                : args.displayImage,
                }

    return update.definition.url
            .replace('{displayImage}', parsedArgs.displayImage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::update
 * @see app/Http/Controllers/Admin/DisplayImageController.php:64
 * @route '/admin/display-images/{displayImage}'
 */
update.put = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::update
 * @see app/Http/Controllers/Admin/DisplayImageController.php:64
 * @route '/admin/display-images/{displayImage}'
 */
    const updateForm = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::update
 * @see app/Http/Controllers/Admin/DisplayImageController.php:64
 * @route '/admin/display-images/{displayImage}'
 */
        updateForm.put = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DisplayImageController::destroy
 * @see app/Http/Controllers/Admin/DisplayImageController.php:97
 * @route '/admin/display-images/{displayImage}'
 */
export const destroy = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/display-images/{displayImage}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::destroy
 * @see app/Http/Controllers/Admin/DisplayImageController.php:97
 * @route '/admin/display-images/{displayImage}'
 */
destroy.url = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { displayImage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { displayImage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    displayImage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        displayImage: typeof args.displayImage === 'object'
                ? args.displayImage.id
                : args.displayImage,
                }

    return destroy.definition.url
            .replace('{displayImage}', parsedArgs.displayImage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisplayImageController::destroy
 * @see app/Http/Controllers/Admin/DisplayImageController.php:97
 * @route '/admin/display-images/{displayImage}'
 */
destroy.delete = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\DisplayImageController::destroy
 * @see app/Http/Controllers/Admin/DisplayImageController.php:97
 * @route '/admin/display-images/{displayImage}'
 */
    const destroyForm = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisplayImageController::destroy
 * @see app/Http/Controllers/Admin/DisplayImageController.php:97
 * @route '/admin/display-images/{displayImage}'
 */
        destroyForm.delete = (args: { displayImage: string | number | { id: string | number } } | [displayImage: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DisplayImageController = { index, create, store, edit, update, destroy }

export default DisplayImageController