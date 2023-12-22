<?php

use function Pest\laravel\get;

use Inertia\Testing\AssertableInertia;

it('should return the correct component', function () {
    get(route('posts.index'))
        ->assertInertia(fn(AssertableInertia $interia) => $interia
            ->component('Posts/Index', true));
});

it('passes posts to the view', function () {
    get(route('posts.index'))
        ->assertInertia(fn(AssertableInertia $interia) => $interia
            ->has('posts'));
});
