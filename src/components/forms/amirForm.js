import { PlusOneOutlined } from "@mui/icons-material";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Upload from "antd/es/upload/Upload";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { saveWorkerData } from "../../services/workersServices/workers";
import { useState } from "react";
import SearchBar from "../search/searchBar";
import AntdSearch from "../search/antdSearch";

const ValidationForm = ({ categories, countries }) => {
	const [photo, setPhoto] = useState(null);
	const [center, setCenter] = useState({ lat: "", lng: "" });
	const [address, setAddress] = useState(null);
	const handleUpload = ({ fileList }) => {
		setPhoto(fileList[0]);
	};
	const handleSubmit = async (values) => {
		console.log("photo", photo);
		console.log("values ", values);

		const formData = new FormData();
		formData.append("name", values.firstName);
		formData.append("last_name", values.lastName);
		formData.append("category", values.firstName);
		formData.append("mobile", values.mobile);
		formData.append("detail", values.details);
		formData.append("locality", address);
		formData.append("lat", center.lat);
		formData.append("lng", center.lng);
		formData.append("country", values.country);
		photo && formData.append("profile_pic", values.profile_pic.file);
		let result = await saveWorkerData(formData);
		console.log("new worker ", result);
	};
	return (
		<Form
			autoComplete="off"
			labelCol={{ span: 10 }}
			wrapperCol={{ span: 14 }}
			onFinish={handleSubmit}
			onFinishFailed={(error) => {
				console.log({ error });
			}}
		>
			<Form.Item name="profile_pic" label="Profile">
				<Upload
					accept=".png,.jpg,.jpeg"
					listType="picture-card"
					valuePropName="fileList"
					getValueFromEvent={(event) => {
						return event?.fileList;
					}}
					beforeUpload={() => false}
					onChange={handleUpload}
				>
					<div>
						<PlusOutlined />
						<div style={{ marginTop: 8 }}>Photo</div>
					</div>
				</Upload>
			</Form.Item>

			<Form.Item
				name="firstName"
				label="First Name"
				rules={[
					{
						required: true,
						message: "Please enter your name",
					},
					{ whitespace: true },
					{ min: 3 },
				]}
				hasFeedback
			>
				<Input placeholder="Type your name" />
			</Form.Item>
			<Form.Item
				name="lastName"
				label="Last Name"
				rules={[
					{
						required: true,
						message: "Please enter your name",
					},
					{ whitespace: true },
					{ min: 3 },
				]}
				hasFeedback
			>
				<Input placeholder="Type your name" />
			</Form.Item>

			<Form.Item
				name="mobile"
				label="Contact No."
				rules={[
					{
						required: true,
						message: "Please enter your name",
					},
					{ whitespace: true },
					{ min: 10 },
					{ max: 10 },
					{
						validator: (_, value) => {
							if (/^[0-9]+$/.test(value)) {
								return Promise.resolve();
							} else {
								return Promise.reject("Some message here");
							}
						},
					},
				]}
				hasFeedback
			>
				<Input placeholder="Type your name" />
			</Form.Item>
			<Form.Item name="category" label="Category" requiredMark="optional">
				<Select placeholder="Select A Category">
					{categories.map((value, i) => {
						return (
							<Select.Option value={value.category} key={value.id}>
								{value.category}
							</Select.Option>
						);
					})}
				</Select>
			</Form.Item>

			<Form.Item name="country" label="Country" requiredMark="optional">
				<Select placeholder="Select your country">
					{countries.map((value, i) => {
						return (
							<Select.Option value={value.country_name} key={value.id}>
								{value.country_name}
							</Select.Option>
						);
					})}
				</Select>
			</Form.Item>

			<Form.Item name="locality" label="Locality">
				{/* <Input placeholder="Locality" /> */}
				<AntdSearch
					setCenter={setCenter}
					setAddress={setAddress}
					address={address}
				/>
			</Form.Item>
			<Form.Item
				name="details"
				label="Details"
				rules={[
					{
						required: true,
						message: "Please enter your Details",
					},
					{ type: "details", message: "Please enter a valid Details" },
				]}
				hasFeedback
			>
				<TextArea name="details" rows={4} placeholder="Details" />
			</Form.Item>

			<Form.Item
				name="agreement"
				wrapperCol={{ span: 24 }}
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) =>
							value
								? Promise.resolve()
								: Promise.reject(
										"To proceed, you need to agree with our terms and conditions"
								  ),
					},
				]}
			>
				<Checkbox>
					{" "}
					Agree to our <a href="#">Terms and Conditions</a>
				</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 24 }}>
				<Button block type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ValidationForm;
