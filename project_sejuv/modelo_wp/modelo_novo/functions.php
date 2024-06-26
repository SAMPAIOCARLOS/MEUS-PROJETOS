<?php

function meu_tema_enqueue_styles() {

    wp_enqueue_style('meu-tema-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'meu_tema_enqueue_styles');



function meu_tema_enqueue_scripts() {
    wp_enqueue_script('meu-tema-script', get_template_directory_uri() . '/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'meu_tema_enqueue_scripts');


add_theme_support('title-tag');


function meu_tema_setup() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'meu_tema_setup' );

?>
