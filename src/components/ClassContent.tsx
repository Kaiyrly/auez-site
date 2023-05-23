import React from 'react';
import '../styles/ClassContent.css';

const mockData = [
  {
    id: 1,
    videoUrl: 'your_video_url_here',
    title: 'Component Title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus leo et nisl commodo scelerisque.',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
  {
    id: 2,
    videoUrl: 'your_video_url_here',
    title: 'Component Title 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus leo et nisl commodo scelerisque.',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
  // Add more objects as needed for additional classes
];

const ClassContent: React.FC = () => {
  // Generate the video and text content based on the provided mock data
  const classContent = mockData.map((classItem) => (
    <div key={classItem.id} className="component-container">
      <div className="video-container">
        {/* Video component */}
        <video controls className="video-container">
          <source src={classItem.videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="content-container">
        {/* Text content */}
        <h2>{classItem.title}</h2>
        <p>{classItem.content}</p>

        {/* Mini Quiz */}
        <div className="quiz-container">
          <h3>Quiz Question</h3>
          <ul>
            {classItem.options.map((option, index) => (
              <li key={index}>
                <input type="radio" name={`quiz_${classItem.id}`} id={`option${index + 1}`} />
                <label htmlFor={`option${index + 1}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));

  return <div>{classContent}</div>;
};

export default ClassContent;
