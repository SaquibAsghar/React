import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const Button = () => {
	return (
		<div>
			<button>
				<FaEdit />
			</button>
			<button>
				<FaTrash />
			</button>
		</div>
	);
};

export default Button;
