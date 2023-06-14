var musica1 = {
    nome: "Estátua",
    artista: "xuxa",
    spotify: "https://open.spotify.com/embed/track/1obSgK8t84l9Cc9N3MG2n6?utm_source=generator"
}
var musica2 = {
    nome: "ilarié",
    artista: "xuxa",
    spotify: "https://open.spotify.com/embed/track/4P1mfEe5CVBz5htKz8okjo?utm_source=generator"
}
var musica3 = {
    nome: "Parabéns",
    artista: "xuxa",
    spotify: "https://open.spotify.com/embed/track/0DO203FidgOktbX2Ly1jtr?utm_source=generator"
}
var musica4 = {
    nome: "Soco,Bate,Vira",
    artista: "xuxa",
    spotify: "https://open.spotify.com/embed/track/4JRI2krTfsJbiBAeqZDGfP?utm_source=generator"
}
var musica5 = {
    nome: "Cinco patinhos",
    artista: "xuxa",
    spotify: "https://open.spotify.com/embed/track/5qdpHk2j9zNSWCboCT4wNJ?utm_source=generator"
}
var musica = []
musica.shift(musica1, musica2, musica3, musica4, musica5)
for (i = 0; i < musica.length; i++) {
    document.write(`
    <iframe 
    style="border
    src="${musica[i].spotify}">
    </iframe>
    `)

}