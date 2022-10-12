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
        alert(`${props.includes(correctAnswer) ? `Wow!!! This  is correct!!!` : `Ops!!! this is wrong!!!`}`)
    }
    return (
        <div className='p-md-4 p-lg-4 p-xl-4 p-xxl-4 w-md-75 w-lg-75 w-xl-75 w-xxl-75 mx-auto padding-mobile'>
            <div className='border p-4 rounded-2 bg-light text-dark'>
                <div className='text-end'>
                    <button className='btn btn-0 btn-outline-white border-0 btn-bg' onClick={() => showCorrectAns(id)}>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                </div>

                <h5 className='mb-2 pb-3 fw-bold text-dark'>Q:{question}</h5>
                <div className='row row-cols-2'>
                    <div className='py-2 w-md-50 w-lg-50 w-xl-50 w-xxl-50 width-mobile'>
                        <button className='text-start px-5 w-100 rounded border-1 border-light'>
                            <p> <input type='radio' onClick={() => correctAnswerReplay(a)} name='quiz' />&nbsp;{a}</p>
                        </button>
                    </div>
                    <div className='py-2 w-md-50 w-lg-50 w-xl-50 w-xxl-50 width-mobile'>
                        <button className='text-start px-5 w-100 rounded border-1 border-light'>
                            <p> <input type='radio' onClick={() => correctAnswerReplay(b)} name='quiz' />&nbsp;{b}</p>
                        </button>
                    </div>
                    <div className='py-2 w-md-50 w-lg-50 w-xl-50 w-xxl-50 width-mobile'>
                        <button className='text-start px-5 w-100 rounded border-1 border-light'>
                            <p> <input type='radio' onClick={() => correctAnswerReplay(c)} name='quiz' />&nbsp;{c}</p>
                        </button>
                    </div>
                    <div className='py-2 w-md-50 w-lg-50 w-xl-50 w-xxl-50 width-mobile'>
                        <button className='text-start px-5 w-100 rounded border-1 border-light'>
                            <p> <input type='radio' onClick={() => correctAnswerReplay(d)} name='quiz' />&nbsp;{d}</p>
                        </button>
                    </div>

                </div>
            </div>
        </div >

    );
};

export default Quizes;
