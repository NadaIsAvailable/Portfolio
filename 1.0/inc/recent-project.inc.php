<li>
    <img src="<?php echo $project['imgSrc']; ?>" alt="<?php echo $project['imgAlt']; ?>">
    <h3><?php echo $project['title']; ?></h3>
    <ul class="keywords">
        <?php foreach ($project['keywords'] as $keyword) { ?>
            <li><?php echo $keyword; ?></li>
        <?php } ?>
    </ul>
    <p><?php echo $project['timeline']; ?></p>
    <p><?php echo $project['desc']; ?></p>
</li>