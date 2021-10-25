<strong>
    Database is Connected!
</strong>
<?php
try {
    DB::connection()->getPDO();
    echo DB::connection()->getDatabaseName();
} catch (\Throwable $th) {
    echo 'null';
}

?>