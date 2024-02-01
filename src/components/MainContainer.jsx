import ImgGrid from './ImgGrid'

export default function MainContainer() {
    return (
        <>
        <div className="tag-container">
            <div className="tag1">tag1</div>
            <div className="tag2">tag2</div>
            <div className="tag3">tag3</div>
        </div>
        <div className="name-container">
            <div className="name1">name1</div>
            <div className="name2">name2</div>
            <div className="name3">name3</div>
        </div>
       <ImgGrid />
        </>
    );
}