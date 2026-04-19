<div>
    <h3><?php echo $list['title']; ?></h3>
    <ul>
        <?php foreach ($list['items'] as $item) { ?>
            <li><?php echo $item; ?></li>
        <?php } ?>
    </ul>
</div>