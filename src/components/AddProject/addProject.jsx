import React, { Component } from 'react';

class AddProject extends Component {
	render() {
		return (
			<div className="add-project">
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Title
					</label>
					<div class="col-sm-10">
						<input type="text" className="form-control" placeholder="Title" />
					</div>
				</div>
                <div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Title
					</label>
					<div class="col-sm-10">
						<textarea type="text" className="form-control" placeholder="Description(min 300 characters req)" />
					</div>
				</div>
                <div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Github URL
					</label>
					<div class="col-sm-10">
						<input type="text" className="form-control" placeholder="URL" />
					</div>
				</div>
                <div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Deployment URL
					</label>
					<div class="col-sm-10">
						<input type="text" className="form-control" placeholder="URL" />
					</div>
				</div>
                <div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Keywords
					</label>
					<div class="col-sm-10">
						<input type="text" className="form-control" placeholder="Keywords(separated with comma)" />
					</div>
				</div>
			</div>
		);
	}
}

export default AddProject;