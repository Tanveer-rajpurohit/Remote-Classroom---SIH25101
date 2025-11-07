export interface Lecture {
    id: string,
    title: string,
    mode: Lecturemode,
    createdAt: Date,
    startingTime: Date,
    endingTime: Date,
    video: string,
    students: string[],
    lecturer: string[],
    docs: string[],
    aiNotes: string[]
}

enum Lecturemode{
    BRODCAST = "brodcast",
    INTERACTIVE = "interactive"
}

export interface Video{
    id: string,
    onlineLink: string,
    title: string,
    timeStamp: string,
}

export interface Chat{
    id: string,
    lectureId: string,
    userId: string,
    timestamp: string,
    message: string
}

