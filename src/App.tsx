import { FormEvent } from 'react';
import { useForm } from './context/FormContext';
import "./scss/App.scss";
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import desktopSidebar from "./assets/images/bg-sidebar-desktop.svg";

/*
	TODO:
	Make phone pattern work
	Make responsive
*/

function App() {
	const { steps, currentStep, done, nextStep, prevStep, confirm } = useForm();

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<main className='main'>
			<form onSubmit={handleFormSubmit} className='form'>
				<aside className='side-bar'>
					<picture className='sidebar-image'>
						<source media='(max-width: 900px)' srcSet={mobileSidebar}/>
						<source media='(min-width: 1024px)' srcSet={desktopSidebar}/>
						<img src={desktopSidebar} alt="sidebar image" />
					</picture>

					<div className="steps">
						{steps.map(({ step, text }) => 
							<div key={step} className='step-item'>
								<div 
									className={`step-number ${ currentStep.step === step ? "active" : "" }`}
								>
									{ step }
								</div>
								<div className='step-text'>
									<p>Step { step }</p>
									<p>{ text }</p>
								</div>
							</div>	
						)}
					</div>
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
								<button onClick={prevStep} className='btn btn-secondary'>
									Go Back
								</button>
							}

							{
								currentStep.step < steps.length &&
								<button onClick={nextStep} className='btn btn-primary'>
									Next Step
								</button>
							}

							{
								currentStep.step === steps.length &&
								<button onClick={confirm} className='btn btn-primary'>
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