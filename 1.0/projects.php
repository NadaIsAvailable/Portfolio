<?php
    $pageTitle = 'Projects';
    $cssFiles = '<link rel="stylesheet" href="css/projects-styles.css">';
    $jsFiles = '<script type="module" src="js/projects.js"></script>';

    require_once('inc/head.inc.php');
?>
    <body>
        <?php require_once('inc/header.inc.php'); ?>

        <main>
            <section id="project-list">
                <h1>My Projects</h1>

                <fieldset>
                    <legend>Keyword Filter:</legend>
                </fieldset>

                <section class="projects"></section>
            </section>
        </main>

        <?php require_once('inc/footer.inc.php'); ?>