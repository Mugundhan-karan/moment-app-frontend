import React from 'react'
import './MomentForm.scss'
const MomentForm = ({
    moment,
    momentImage,
    imagePreview,
    handleInputChange,
    handleImageChange,
    saveMoment
}) => {
    return (
        <div>
            <form onSubmit={saveMoment}>
                <div class="frame">
                    <div class="fields">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title"
                            placeholder='sample title'
                            value={moment?.title}
                            onChange={handleInputChange} />
                        <label for="tags">Tags</label>
                        <input type="text" id="tags" name="tags"
                            placeholder='#sampletag'
                            value={moment?.tags}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="center">
                        <div class="title">
                            <h1>Browse file to upload</h1>
                        </div>

                        <div class="dropzone">
                            {imagePreview != null ? (<div>
                                <img src={imagePreview}
                                    class="upload-icon" />
                            </div>) : (
                                <p>Click Here</p>
                            )}

                            <input type="file"
                                class="upload-input" name="image"
                                onChange={(e) => handleImageChange(e)} />
                        </div>

                        {/* <button type="button" class="btn" name="uploadbutton">Upload file</button> */}

                    </div>
                    <button type="submit" class="btn-submit" name="submit">Save Moment</button>
                </div>
            </form>
        </div>
    )
}

export default MomentForm