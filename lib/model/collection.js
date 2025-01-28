

// 收藏模型
export class Collection {
    id;
    title;
    artist;
    album;
    cover;
    lyric;
    // 构造器
    isEditing = false;
    constructor(id, title, artist, album, cover, lyric) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.cover = cover;
        this.lyric = lyric
    }

}