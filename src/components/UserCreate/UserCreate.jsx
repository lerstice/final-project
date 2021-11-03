import React, { Component } from "react";

export class UserCreate extends Component {
	state = {
		name: "",
	};

	handleNameChange = (e) => {
		const name = e.target.value;
		this.setState({ name });
	};

	handleUserCreate = () => {
		const { name } = this.state;

		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: JSON.stringify({ name }),
			headers: {
				"Content-Type": "application/json", // указываем, когда отправляем значение на сервер, когда принимаем - не нужен
			},
		}).then(() => {
			alert("Пользователь создан");
			this.setState({ name: "" });
		});
	};

	render() {
		const { name } = this.state;

		return (
			<div>
				<input
					type="text"
					name="name"
					placeholder="User name"
					onChange={this.handleNameChange}
					value={name}
				/>
				<br />
				<input
					type="button"
					value="Создать"
					onClick={this.handleUserCreate}
					disabled={!name.length}
				/>
			</div>
		);
	}
}
