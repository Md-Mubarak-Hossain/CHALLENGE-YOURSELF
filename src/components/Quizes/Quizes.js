import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import './Quizes.css';
const Quizes = ({ ques }) => {
    const { correctAnswer, id, options, question } = ques;
    const [a, b, c, d] = options;
    const showCorrectAns = (id) => {
        if (id) {
            alert(`${correctAnswer}`);
        }
    }

    const correctAnswerReplay = (props = 'no') => {
        alert(`${props.includes(correctAnswer) ? 'This answere is correct!!!' : 'Your selected answer is wrong!!!'}`);
    }
    return (
        <div className='p-4'>
            <div className='border p-4 rounded-2 w-75'>
                <div className='text-end '>
                    <button className='btn btn-0 btn-outline-white border-0 btn-bg' onClick={() => showCorrectAns(id)}>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                </div>

                <h3>Ques:{question}</h3>
                <div className='row row-cols-2'>
                    <button className='btn btn-0 btn-outline-white border-0 text-start px-2'>
                        <p> <input type='radio' onClick={() => correctAnswerReplay(a)} name='quiz' />&nbsp;{a}</p>
                    </button>
                    <button className='btn btn-0 btn-outline-white border-0 text-start px-2'>
                        <p> <input type='radio' onClick={() => correctAnswerReplay(b)} name='quiz' />&nbsp;{b}</p>
                    </button>
                    <button className='btn btn-0 btn-outline-white border-0 text-start px-2'>
                        <p> <input type='radio' onClick={() => correctAnswerReplay(c)} name='quiz' />&nbsp;{c}</p>
                    </button>
                    <button className='btn btn-0 btn-outline-white border-0 text-start px-2'>
                        <p> <input type='radio' onClick={() => correctAnswerReplay(d)} name='quiz' />&nbsp;{d}</p>
                    </button>

                </div>
            </div>
        </div >

    );
};

export default Quizes;
