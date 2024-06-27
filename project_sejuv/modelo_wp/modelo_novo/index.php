
<?php get_header(); ?>
    <main>
        <div id="section-infor">
            <div id="title">
                <h1>NOTÍCIAS</h1> 

                <span id="linha"></span>
                <div id="barra_two"></div>

                <h1>
                    ACESSAR TODAS AS NOTÍCIAS
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </h1>

                
            </div>

            <div id="infor_cards">
                <div id="title_card">
                    <h1>CONFIRA OS 
                        DESTAQUES</h1>
                </div>

                <div id="barra"></div>

                <div id="container_cards">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <div class="cards">
                        <div class="box-img-card">
                            <?php if ( has_post_thumbnail() ) : ?>
                            <?php the_post_thumbnail('full', array('class' => 'img-post')); ?>
                            <?php endif; ?>
                        </div>
    
                        <div class="infor">
                            <h2><?php the_title(); ?></h2>
                            <p><?php the_excerpt(); ?></p>
                            <a href="<?php the_permalink(); ?>">Leia mais</a>
                        </div>
                    </div>
    <?php endwhile; else : ?>
        <p>Nenhuma notícia encontrada.</p>
    <?php endif; ?>
</div>

            </div>


        </div>

        <div id="espaco">

        </div>
    </main>
    
<?php get_footer(); ?>