/*function DownloadFile(url,download)
{
    console.log("file started downloading")
    setTimeout(()=>{
        let path=url.split('/').pop()
        download(path);
    }
    ,2000);
}
DownloadFile('http//www.facebook.com/profile.jpg',function(path){
    console.log('file successfully downloaded $
    {path}');
})*/

function CompressFile(url,download)
{
    console.log("file started downloading")
    setTimeout(()=>{
        const comp=path.split('.')[0]+'.Zip';
        Compress(comp);
    },2000);
}
DownloadFile('http//www.facebook.com/profile.jpg',function(path){
    console.log('file successfully downloaded $
    {path}');
})