export default{
    history:'hash',
    plugins:[
        [
            'umi-plugin-react',
            {
                dva:true,
                antd:true
            }
        ]
    ],
    proxy: {
        '/api': {
          target: 'https://net-music.penkuoer.com',
          pathRewrite: { '^/api': '' },
          changeOrigin: true
        }
      }
}