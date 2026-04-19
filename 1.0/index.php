<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $pageTitle = 'Home';
    $cssFiles = '<link rel="stylesheet" href="css/home-styles.css">';
    $jsFiles = '';

    require_once('inc/head.inc.php');
?>
    <body>
        <?php require_once('inc/header.inc.php'); ?>

        <div id="banner">
            <!-- <video playsinline autoplay muted loop poster="media/images/video-cover.png" id="bgvid">
                <source src="media/videos/banner.mp4" type="video/mp4">
            </video> -->
            <video autoplay muted loop playsinline poster="media/images/video-cover.png" width="100%" id="bgvid">
                <source src="https://archive.org/download/banner_20250721/banner.mp4" type="video/mp4">
            </video>
            <div>
                <h2>I'm&nbsp;Kevin&nbsp;Zheng. A&nbsp;Game&nbsp;Programmer.</h2>
                <p>I specialize in creating immersive and interactive experiences, blending code with creativity.</p>
            </div>
        </div>

        <main>
            <section id="skill-sets">
                <h2>About me</h2>

                <?php
                    $list = [
                        'title' => 'Specialities',
                        'items' => ['Game Design', 'Game Development', 'Front-End Development', 'Interactive Experience Design']
                    ];
                    include('inc/skill-sets.inc.php');

                    $list = [
                        'title' => 'Skills',
                        'items' => ['C#', 'C++', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Object-Oriented Programming']
                    ];
                    include('inc/skill-sets.inc.php');

                    $list = [
                        'title' => 'Tools & Technologies',
                        'items' => ['Unity', 'Visual Studio', 'Visual Studio Code', 'Maya', 'MonoGame Framework', 'PixiJS', 'Box2D Library', 'SFML Library']
                    ];
                    include('inc/skill-sets.inc.php');
                ?>
            </section>

            <section id="works">
                <h2>Some of my latest works</h2>
                <ul id="projects">
                    <?php
                        $project = [
                            'imgSrc' => 'media/images/projects/crap.png',
                            'imgAlt' => 'Homepage of the CRAP design principles website',
                            'title' => 'CRAP Design Principles Website',
                            'timeline' => 'Janurary 2025 - May 2025',
                            'keywords' => ['HTML', 'CSS', 'JavaScript', 'PHP', 'Website', 'Academic project', 'Group project'],
                            'desc' => ''
                        ];
                        include('inc/recent-project.inc.php');

                        $project = [
                            'imgSrc' => 'media/images/projects/find-nowhere.jpeg',
                            'imgAlt' => 'Box cover art',
                            'title' => 'Find Nowhere',
                            'timeline' => 'Feburary 2025 - May 2025',
                            'keywords' => ['Board game', 'Academic project', 'Group project'],
                            'desc' => ''
                        ];
                        include('inc/recent-project.inc.php');

                        $project = [
                            'imgSrc' => 'media/images/projects/aero-shift.png',
                            'imgAlt' => 'aero shift home screen',
                            'title' => 'Aero Shift',
                            'timeline' => '15 November 2024 - 17 November 2024',
                            'keywords' => ['C#', 'Unity 2D', 'Group project', 'Game jam / hackathon'],
                            'desc' => ''
                        ];
                        include('inc/recent-project.inc.php');
                    ?>
                </ul>
                <a href="projects.php">View More</a>
            </section>
        </main>

        <?php require_once('inc/footer.inc.php'); ?>