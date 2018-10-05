<?php
/**
 * @package Casper
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php
    /* translators: used between list items, there is a space after the comma */
    $category_list = get_the_category_list(__(', ', 'casper'));
    ?>
    <header class="post-header">
        <h1 class="post-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
        <?php if (has_post_thumbnail()) { // check if the post has a Post Thumbnail assigned to it.
            $image_id = get_post_thumbnail_id();
            $thumb_url = wp_get_attachment_image_src($image_id, 'thumbnail', true);
            $medium_url = wp_get_attachment_image_src($image_id, 'medium', true);
            $large_url = wp_get_attachment_image_src($image_id, 'large', true);
            ?>

            <div class="post-image">
                <img data-src='<480:<?php echo $thumb_url[0]; ?>, <768:<?php echo $medium_url[0]; ?>, >768:<?php echo $large_url[0]; ?>'/>
            </div>
            <noscript><?php the_post_thumbnail('thumbnail'); ?></noscript>
        <?php } ?>
    </header>
    <section class="post-content">

        <?php
        if (false != get_theme_mod('casper_read_more_link')) {
            $read_more = get_theme_mod('casper_read_more_link');
        } else {
            $read_more = __('&hellip;&nbsp;<span class="meta-nav">&rarr;</span>', 'casper');
        }
        if (has_excerpt() || false != get_theme_mod('casper_auto_excerpt')) {
            the_excerpt();
        } else {
            the_content($read_more);
        }
        ?>
        <?php
        wp_link_pages(array(
            'before' => '<div class="page-links">' . __('Pages:', 'casper'),
            'after' => '</div>',
        ));
        ?>
        <div class="clear">&nbsp;</div>
    </section>

    <footer class="post-meta">
        <?php if ('post' == get_post_type()) : ?>
        <?php echo get_avatar(get_the_author_meta('ID'), 24, '', get_the_author(), $args = array('class' => 'author_thumb')); ?>
        <a href="<?php echo get_the_author(); ?>"><?php echo get_the_author_meta('display_name'); ?> </a>

            <?php
        printf(__(' on ', 'casper'));
        $tags = get_the_tags(the_ID());

        if (!empty($tags)){
            foreach ($tags as $tag) {
                echo '<a href="';
                echo get_tag_link($tag->term_id) .'">';
                echo $tag->name. '</a>, ';
            }
        }
        ?>
        <?php
        if (false == get_theme_mod('casper_hide_dates')) {
            casper_posted_on();
        }
        if (false == get_theme_mod('casper_hide_categories')) {
            printf(__(' in ', 'casper') . '%1$s', $category_list);
        }
        edit_post_link(__('Edit&rarr;', 'casper'), '<span class="edit-link">&nbsp;&bull;&nbsp;', '</span>');
        ?>
        <?php endif; ?>
    </footer>

</article><!-- #post-## -->