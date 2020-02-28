export const onResize = {
    data: () => ({
        aspectRatio: 1
    }),
    created () {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed () {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        gcd (a, b) {
            return (b === 0) ? a : this.gcd(b, a % b);
        },
        handleResize () {
            const { width, height } = screen;
            const ratio = this.gcd(width, height);
            this.aspectRatio = (width / ratio) / (height / ratio);
        }
    }
};
/** https://codeday.me/bug/20170818/55016.html
 * <script type="text/javascript">
        function gcd (a, b) {
            return (b == 0) ? a : gcd (b, a%b);
        }
        var w = screen.width;
        var h = screen.height;
        var r = gcd (w, h);
        document.write ("<pre>");
        document.write ("Dimensions = ", w, " x ", h, "<br>");
        document.write ("Gcd        = ", r, "<br>");
        document.write ("Aspect     = ", w/r, ":", h/r);
        document.write ("</pre>");
    </script>
 */
