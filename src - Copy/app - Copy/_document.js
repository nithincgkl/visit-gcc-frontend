import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script>
                        hi gran
                    </script>
                </Head>
                <body>


                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument