#!/bin/bash

ac="yes";
until [ $ac = "-" ]; do
    echo -e "";
    echo -e "+ : start [node]";
    echo -e "";
    echo -e "1 : npm:install";
    echo -e "2 : npm:update";
    echo -e "3 : npm:upgrade";
    echo -e "";
    echo -e "4 : svelte:check";
    echo -e "5 : vite:build";
    echo -e "";
    echo -e "7 : generate:sitemap";
    echo -e "";
    echo -e "9 : gzipper:compress";
    echo -e "0 : clean";
    echo -e "";
    echo -e "m : memcached:restart";
    echo -e "s : ▼ supervisor";
    echo -e "n : ▼ nginx";
    echo -e "";
    echo -e "Type \c ";
    read  ac;
    case $ac in
        "+")
            echo -e "> start [node]";
            node build/index.js;;

        "1")
            echo -e "> npm:install";
            npm install;;

        "2")
            echo -e "> npm:update";
            npm update;;

        "3")
            echo -e "> npm:upgrade";
            npm upgrade;;

        "4")
            echo -e "> svelte:check";
            npm run check;;

        "5")
            echo -e "> vite:build";
            npm run build;;

        "7")
            echo -e "> generate:sitemap";
            npm run generate:sitemap;;

        "9")
            echo -e "> gzipper:compress";
            npm run compress;;

        "0")
            echo -e "> clean";
            npm run clean;;

        "m")
            echo -e "> memcached:restart";
            sudo service memcached restart;;

        "s")
            acc="yes";
            until [[ $acc == "-" ]]; do
                echo -e "";
                echo -e "    1 : stop master.dev";
                echo -e "    2 : start master.dev";
                echo -e "    3 : restart master.dev";
                echo -e "    4 : restart all";
                echo -e "    - : exit";
                echo -e "";
                echo -e "    Type \c ";
                read  acc;
                case $acc in
                    "1")
                        echo -e "> supervisor:stop skm";
                        sudo supervisorctl stop skm;;
                    "2")
                        echo -e "> supervisor:start skm";
                        sudo supervisorctl start skm;;
                    "3")
                        echo -e "> supervisor:restart skm";
                        sudo supervisorctl reread;
                        sudo supervisorctl restart skm;;
                    "4")
                        echo -e "> supervisor restart all";
                        sudo systemctl restart supervisor;;
                esac
            done;;

        "n")
            acc="yes";
            until [[ $acc == "-" ]]; do
                echo -e "";
                echo -e "    1 : restart";
                echo -e "    2 : status";
                echo -e "";
                echo -e "    - : exit";
                echo -e "";
                echo -e "    Type \c ";
                read  acc;
                case $acc in
                    "1")
                        echo -e "> nginx restart";
                        sudo systemctl restart nginx.service;;
                    "2")
                        echo -e "> nginx status";
                        sudo systemctl status nginx.service;;
                esac
            done;;
    esac
done
echo -e "";
