import { FormEvent } from 'react';
import { useForm } from './context/FormContext';
import "./scss/App.scss";

/*
	TODO:
	Handle updating costs when switching billing
*/

function App() {
	const { steps, currentStep, done, nextStep, prevStep, confirm } = useForm();

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<main>
			<form onSubmit={handleFormSubmit} className='form'>
				<aside className='side-bar'>
					{steps.map(({ step, text }) => 
						<div key={step} className='step-container'>
							<div 
								className={`step-number ${ currentStep.step === step ? "active" : "" }`}
							>
								{ step }
							</div>
							<div>
								<p>Step { step }</p>
								<p> { text } </p>
							</div>
						</div>	
					)}
				</aside>

				<div className="form-body">
					<div className="step-content">
						{ currentStep.element }
					</div>

					{
						!done &&
						<div className="form-buttons">
							{
								currentStep.step > 1 &&
								<button onClick={prevStep}>
									Go Back
								</button>
							}

							{
								currentStep.step < steps.length &&
								<button onClick={nextStep}>
									Next Step
								</button>
							}

							{
								currentStep.step === steps.length &&
								<button onClick={confirm}>
									Confirm
								</button>
							}
						</div>
					}
				</div>
			</form>
		</main>
	);
}

export default App;