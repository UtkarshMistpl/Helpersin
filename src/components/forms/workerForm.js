import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
	Checkbox,
	Upload,
	Row,
	Col,
	Divider,
} from "antd";
import { Box } from "@mui/system";
import { useFormik } from "formik";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = ({ categories, countries }) => {
	const [componentDisabled, setComponentDisabled] = useState(false);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		country: "",
		category: "",
		locality: "",
	});
	const handleChange = (value) => {
		setUser({ ...user, category: value });
		console.log("current user data", user);
	};
	const RowStyle = {
		marginBottom: "1rem",
	};
	const hadleSubmit = () => {};
	console.log("catefds eds", countries);
	return (
		<>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				disabled={componentDisabled}
				style={{
					maxWidth: 600,
					padding: "1rem",
				}}
			>
				<Box sx={{ minWidth: "200px" }}>
					<Row>
						<Col>
							<Upload action="/upload.do" listType="picture-card">
								<div>
									<PlusOutlined />
									<div style={{ marginTop: 8 }}>Photo</div>
								</div>
							</Upload>
						</Col>
					</Row>
				</Box>
				<Box>
					<Row
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}
						style={RowStyle}
					>
						<Col span={12} className="gutter-row">
							<Input name="first_name" placeholder="First Name" />
						</Col>

						<Col span={12} className="gutter-row">
							<Input name="last_name" placeholder="Last Name" />
						</Col>
					</Row>
					<Row
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}
						style={RowStyle}
					>
						<Col span={12} className="gutter-row">
							<Select
								defaultValue="Carpenter"
								style={{
									width: 120,
								}}
								name="category"
								onChange={(value, e) => {
									handleChange(value, e);
								}}
								options={categories}
							/>
						</Col>

						<Col span={12} className="gutter-row">
							<Input name="phone" placeholder="Phone" />
						</Col>
					</Row>
					<Row
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}
						style={RowStyle}
					>
						<Col span={12} className="gutter-row">
							<Select
								defaultValue="India"
								style={{
									width: 120,
								}}
								name="country"
								onChange={handleChange}
								options={countries}
							/>
						</Col>

						<Col span={12} className="gutter-row">
							<Input name="locality" placeholder="locality" />
						</Col>
					</Row>
					<Row
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}
						style={RowStyle}
					>
						<Col span={24} className="gutter-row">
							<TextArea name="details" rows={4} placeholder="Details" />
						</Col>

						<Col span={24}>
							<Checkbox name="accept" style={{ marginTop: "1rem" }}>
								Checkbox
							</Checkbox>
						</Col>

						<Col span={24}>
							<Form.Item label="Button">
								<Button onClick={hadleSubmit}>Register</Button>
							</Form.Item>
						</Col>
					</Row>
				</Box>
			</Form>
		</>
	);
};

export default FormDisabledDemo;
