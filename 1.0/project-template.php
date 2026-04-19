<?php
    $projectData;

    if (empty($_POST)) {
        header('Location: projects.php');
        exit();
    } else {
        $projectData = [
            'index' => $_POST['index'],
            'data' => json_decode($_POST['projectData'], true)
        ];
    }

    $pageTitle = $projectData['data']['Name'];
    $cssFiles = '<link rel="stylesheet" href="css/projects-styles.css">';
    $jsFiles = '<script type="module" src="js/imageGallery.js"></script>';

    require_once('inc/head.inc.php');
?>
<body>
    <?php require_once('inc/header.inc.php'); ?>

    <main>
        <section id="project-template" data-index="<?php echo $projectData['index']; ?>">
            <a href="projects.php" class="button">Go Back</a>

            <div class="image-gallery">
                <span id="prev-image" class="button">&lt;</span>

                <img src="media/images/projects/placeholder.png" alt="placeholder" id="project-image">

                <span id="next-image" class="button">&gt;</span>
            </div>
            
            <h1><?php echo $pageTitle; ?></h1>

            <ul class="keywords">
                <?php
                    $keywords = explode(', ', $projectData['data']['Keywords']);
                    foreach ($keywords as $keyword) {
                        echo '<li class="keyword">' . htmlspecialchars($keyword) . '</li>';
                    }
                ?>
            </ul>

            <p><?php echo $projectData['data']['Date Started'] . ' - ' . $projectData['data']['Date Finished']?></p>
            <p>Creator(s): <?php echo $projectData['data']['Created By'] ?></p>
            <p><?php echo $projectData['data']['About'] ?></p>

            <h2>My Works: </h2>
            <ul>
                <?php
                    $works = explode("\n", $projectData['data']['My Works']);
                    foreach ($works as $work) {
                        echo '<li>' . htmlspecialchars($work) . '</li>';
                    }
                ?>
            </ul>

            <h2>Other Documentations:</h2>
            <ul>
                <?php
                    if ($projectData['data']['Others'] == 'N/A') {
                        echo '<li>No other documentations available.</li>';
                    } else {
                        $otherFiles = explode('/', $projectData['data']['Others']);
                        foreach ($otherFiles as $file) {
                            $file = htmlspecialchars($file);

                            $filePath = '';
                            if (str_ends_with($file, '.pdf')) $filePath = 'media/pdfs/' . $file;
                            else $filePath = 'media/images/projects/' . $file;
                            
                            echo '<li>' . $file . '<a href="' . $filePath . '" class="open-in-another-tab" target="_blank">Open in another tab</a></li>';
                        }
                    }
                ?>
            </ul>

            <?php
                $link = filter_var($projectData['data']['Link'], FILTER_VALIDATE_URL);
                if ($projectData['data']['Button'] !== 'N/A' && $link) {
                    echo '<a href="' . htmlspecialchars($link) . '" class="button" target="_blank">' . htmlspecialchars($projectData['data']['Button']) . '</a>';
                }
            ?>
        </section>
    </main>

    <script>
        let rawData = <?php echo json_encode($projectData['data']['Images']); ?>;
    </script>

    <?php require_once('inc/footer.inc.php'); ?>