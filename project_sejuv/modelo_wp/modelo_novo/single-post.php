<?php get_header(); ?>
<main class="main-single-post">
    <div class="section-infor-single-post">
        <div class="title-single-post">
            <h1><?php the_title(); ?></h1>
            <!--<span id="linha"></span>-->
        </div>
        <div class="infor_cards-single-post">
            <div class="container_cards-single-post">
                <div class="cards-single-post">
                    <div class="box-img-card-single-post">
                        <?php if ( has_post_thumbnail() ) : ?>
                        <?php the_post_thumbnail('full', array('class' => 'img-single-post')); ?>
                        <?php endif; ?>
                    </div>
                    <div class="infor-single-post">
                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                            <p><?php the_content(); ?></p>
                        <?php endwhile; else : ?>
                            <p>Nenhuma notícia encontrada.</p>
                        <?php endif; ?>
                    </div>
                    
                    <div class="container-button-back">
                        <button class="button-back">Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<?php get_footer(); ?>
