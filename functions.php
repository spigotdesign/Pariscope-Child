<?php
/*
 * This is the child theme for Pariscope theme.
 *
 * (Please see https://developer.wordpress.org/themes/advanced-topics/child-themes/#how-to-create-a-child-theme)
 */
add_action( 'wp_enqueue_scripts', 'periscope_child_enqueue_styles' );

function periscope_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/dist/css/screen.css', array(), _P_VERSION );
    
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/dist/css/screen.css',
        array('parent-style')
    );
}
/*
 * Your code goes below
 */