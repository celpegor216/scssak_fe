import '../assets/styles/ArticleWritePage.css';
import React, {useState, useRef} from 'react';
import go_back_arrow from '../assets/images/go_back_arrow.png';
import dropdown_arrow_down from '../assets/images/dropdown_arrow_down.png';
import dropdown_arrow_up from '../assets/images/dropdown_arrow_up.png';
import picture_button from '../assets/images/picture_button.png';

const ArticleWritePage = () => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibility, setVisibility] = useState('전체');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const boards = [
    '자유 게시판',
    '꿀팁 게시판',
    '질문 게시판',
    '칭찬 게시판',
    '자랑해요 게시판',
  ];
  const boardRef = useRef(null);

  const handleBoardSelect = board => {
    setSelectedBoard(board);
    setIsDropdownOpen(false);
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({
      selectedBoard,
      visibility,
      title,
      content,
      image: selectedImage,
    });
  };

  return (
    <div className="article-write-page">
      <header className="header">
        <div className="form-group back-button-group">
          <button className="back-button">
            <img src={go_back_arrow} alt="<-"></img>
          </button>
          <div>글쓰기</div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          등록
        </button>
      </header>
      <div className="form">
        <div className="form-group select-board-group">
          <div
            className="select-board"
            ref={boardRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedBoard || '게시판을 선택하세요'}
            {!isDropdownOpen && (
              <img
                src={dropdown_arrow_down}
                alt="▼"
                className="dropdown-arrow-image"></img>
            )}
            {isDropdownOpen && (
              <img
                src={dropdown_arrow_up}
                alt="▲"
                className="dropdown-arrow-image"></img>
            )}
          </div>
          {isDropdownOpen && (
            <div
              className="dropdown-menu"
              style={{width: boardRef.current?.offsetWidth}}>
              {boards.map((board, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleBoardSelect(board)}>
                  {board}
                </div>
              ))}
            </div>
          )}
        </div>
        <hr /> {/* 구분선 */}
        <div className="form-group visibility-group">
          <label className="visibility-label">공개범위</label>
          <div className="visibility-options">
            <label>
              <input
                type="radio"
                value="전체"
                checked={visibility === '전체'}
                onChange={() => setVisibility('전체')}
              />
              전체
            </label>
            <label>
              <input
                type="radio"
                value="동기"
                checked={visibility === '동기'}
                onChange={() => setVisibility('동기')}
              />
              동기
            </label>
          </div>
        </div>
        <hr /> {/* 구분선 */}
        <div className="form-group">
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <hr /> {/* 구분선 */}
        <div className="form-group text-group">
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="form-group picture-group">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{display: 'none'}}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload" className="photo-add-button">
            <img src={picture_button} alt="사진 추가하기"></img>
          </label>
          {selectedImage && (
            <img src={selectedImage} alt="selected" className="preview-image" />
          )}
        </div>
        <hr /> {/* 구분선 */}
      </div>
    </div>
  );
};

export default ArticleWritePage;
