function FormStatus (props) {
  return (
		<div className="form-status flex border-b-2 border-gray-300 mb-3 py-6 text-xl text-gray-700">
			{["Sign Up", "Message", "Checkout"].map((element, index) => (
				<div className="flex items-center" key={index}>
					<span className={index === props.current ? "status bg-blue-500 text-white": "status bg-blue-50 text-blue-500"}>{index < props.current ? <i className="fas fa-check"></i> : index + 1}</span>
					{element}
				</div>
			))}
		</div>
  );
}

export default FormStatus;