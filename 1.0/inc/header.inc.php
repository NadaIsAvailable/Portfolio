<header>
    <nav>
        <h1><a href="index.php" <?php if($pageTitle == 'Home') echo 'class="current"'; ?>>Kevin Z.</a></h1>
        <ul>
            <li><a href="experience.php" <?php if($pageTitle == 'Experience') echo 'class="current"'; ?>>Experience</a></li>
            <li><a href="projects.php" <?php if($pageTitle == 'Projects') echo 'class="current"'; ?>>Projects</a></li>
            <li><a href="connect.php" <?php if($pageTitle == 'Connect') echo 'class="current"'; ?>>Connect</a></li>
        </ul>
    </nav>
</header>