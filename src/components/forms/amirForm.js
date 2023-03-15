import { PlusOneOutlined } from "@mui/icons-material";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Upload from "antd/es/upload/Upload";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const ValidationForm = ({ categories, countries }) => {
	return (
		<Form
			autoComplete="off"
			labelCol={{ span: 10 }}
			wrapperCol={{ span: 14 }}
			onFinish={(values) => {
				console.log({ values });
			}}
			onFinishFailed={(error) => {
				console.log({ error });
			}}
		>
			<Upload action="/upload.do" listType="picture-card">
				<div>
					<PlusOutlined />
					<div style={{ marginTop: 8 }}>Photo</div>
				</div>
			</Upload>
			<Form.Item
				name="fullName"
				label="Full Name"
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
				name="email"
				label="Email"
				rules={[
					{
						required: true,
						message: "Please enter your email",
					},
					{ type: "email", message: "Please enter a valid email" },
				]}
				hasFeedback
			>
				<Input placeholder="Type your email" />
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

			<Form.Item
				name="locality"
				label="Locality"
				rules={[
					{
						required: true,
						message: "Please Provide Locality",
					},
					{ type: "text", message: "Please enter a valid locality" },
				]}
				hasFeedback
			>
				<Input placeholder="Locality" />
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
