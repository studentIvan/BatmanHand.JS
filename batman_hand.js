/**
 * Batman History Api Navigation Dispatcher
 *
 * @author Ivan
 */
batmanHand = {

    /**
     * Link navigate operation
     *
     * @param path Relative reference
     * @param title Reference title, default: document.title
     */
    navigate:function (path, title) {
        if (path) {
            path = path.replace(/^(?:\/)?((?:[^\/]+)(?:.*)?)?$/g, '/$1');
            title = title || document.title;
            history.pushState({'p':path, 't':title}, title, path);
            this.callback(path, title);
        }
    },

    /**
     * Init
     *
     * @param callback JavaScript callback for navigation
     * @param unitType Name of links tags, default: a (<a>)
     */
    init:function (callback, unitType) {
        if (typeof history.pushState !== 'undefined') {
            unitType = unitType || 'a';
            this.callback = callback;
            var initPath = document.location.pathname || '/';
            history.replaceState({'p':initPath, 't':document.title}, document.title);

            var t = document.getElementsByTagName(unitType), i = 0, x;

            while (x = t.item(i++)) {
                if (x.getAttribute('data-history')) {
                    x.onclick = function () {
                        batmanHand.navigate(this.getAttribute('href'), this.getAttribute('data-history'));
                        return false;
                    }
                }
            }

            window.addEventListener('popstate', function (e) {
                batmanHand.navigate(e.state.p, e.state.t);
            }, false);
        }
    }
}