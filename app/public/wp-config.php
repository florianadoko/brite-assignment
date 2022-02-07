<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vi70VH44DyNeNncpQb5lJFt3laVsJDqKq6PCwD1LHhbTqvJKOquzGVDphou9myPl35U7SR281qykUr4SQZ5HRg==');
define('SECURE_AUTH_KEY',  'roi8UxVJsrZBqDV1G4sISCnt1qiocntndxpQNOBjRY+0yN8cz3UZ3iZEBPzQnlC+mlulzeKWsD4GcSZPwuDLFw==');
define('LOGGED_IN_KEY',    'Jg59EhLfM1PVxa9n8u+PlTv75Mz5YMHGOb2TsAPa2lnbFRo/hZfsCd0KapDbcBGB/+lSq2V5WtX8W2/+4qic3Q==');
define('NONCE_KEY',        'Bk4Xuv6PTq15LXmR3U7GLp7rf8G0/jfie6MPvnjTam3HtVmt1Z6/Qjf+YNisKIDX/jPryzhIbOtTMWIIaYEjaQ==');
define('AUTH_SALT',        'DjxqEQTaBkH2tUe4r73thScyuwzWc9cLgCh29qsUJLUi0wSC+f1PB1L8gRoD2oOuPiVILofDQhRT1znZeJitag==');
define('SECURE_AUTH_SALT', '8JCTfoc12OQYL2j/mQk9I86snKe8aQyVeod0Ye1xjoWQjYiJ/ha1kKYepEC18pFuGpyzye+vZE2a5WTu/9oMdQ==');
define('LOGGED_IN_SALT',   'VsR6krpDgsfoKZc9haFH5ZdxrSy5kGKzGDOXv+Zbr2OXny90CKa2tm5GufOYaQUSZZz4rK/0ijD1PiaZAXGXmA==');
define('NONCE_SALT',       'dNr9/oo5rvs2Cx/J3IzqUj+NBP3irlKOQq2anLldJxes3PCsINvDzqHQjUq7Gaxtyg2iiJtxoTeNA3Xdw+n2og==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
