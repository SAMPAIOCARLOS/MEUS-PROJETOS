<?php get_header() ?>

    <?php if (have_posts()) { while (have_posts()) {
    the_post(); ?>

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
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                </div>
            </div>


        </div>

        <div id="espaco">

        </div>
    </main>

    <?php }; }; ?>
    <?php get_footer(); ?>