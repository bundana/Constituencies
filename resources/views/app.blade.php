<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', '"2024 NDC Election Strategy Key Constituencies') }}</title>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('NDC-logo.webp') }}" type="image/x-icon">

    <!-- Meta Tags for SEO -->
    <meta name="description" content="Key Constituencies to be defended and those that could be targeted for flipping in 2024">
    <meta name="keywords" content="2024 NDC Election Strategy Key Constituencies, ndc 2024, bundana">
    <meta name="author" content="Bundana, Sirateq Ghana">

    <!-- Open Graph Meta Tags for Social Media -->
    <meta property="og:title" content="{{ config('app.name', 'Laravel') }}">
    <meta property="og:description" content="Key Constituencies to be defended and those that could be targeted for flipping in 2024">
    <meta property="og:image" content="{{ asset('NDC-logo.webp') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name', '2024 NDC Election Strategy Key Constituencies to Defend and Flip') }}">
    <meta name="twitter:description" content="Key Constituencies to be defended and those that could be targeted for flipping in 2024">
    <meta name="twitter:image" content="{{ asset('NDC-logo.webp') }}">
    <meta name="twitter:site" content="{{ request()->host() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
