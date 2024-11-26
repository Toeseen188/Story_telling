import React, { useState, useEffect } from "react";

const UserDashboard = ({ username }) => {
  const [user, setUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedBio, setEditedBio] = useState("");
  const [editedAvatar, setEditedAvatar] = useState("");

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      const fetchedUser = {
        name: username,
        bio: "Fantasy and mystery lover 📚✨",
        avatar: "https://via.placeholder.com/150",
      };
      setUser(fetchedUser);
      setEditedName(fetchedUser.name); 
      setEditedBio(fetchedUser.bio);
      setEditedAvatar(fetchedUser.avatar);
    };

    fetchUserData();
  }, [username]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser((prev) => ({
      ...prev,
      name: editedName,
      bio: editedBio,
      avatar: editedAvatar,
    }));
    setIsEdit(false);
  };

  if (!user) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="container py-5 mt-4">
      {/* Profile Header */}
      <div className="text-center mb-5">
        {isEdit ? (
          <>
           <p className="text-center">Edit Profile</p>
            <img
              src={editedAvatar}
              alt="Profile Avatar"
              className="rounded-circle mb-"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p>Change photo</p>
            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="form-control"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              />
            </div>
          </>
        ) : (
          <img
            src={user.avatar}
            alt="Profile Avatar"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        )}

        {isEdit ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="form-control mb-2"
              placeholder="Username"
              style={{ maxWidth: "300px", margin: "0 auto" }}
            />
            <textarea
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
              className="form-control mb-2"
              rows="3"
              placeholder="Enter bio"
              style={{ maxWidth: "300px", margin: "0 auto" }}
            />
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </>
        )}
      </div>

      {/* Edit and Save Buttons */}
      <div className="text-center">
        {isEdit ? (
          <div>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn text-white" style={{background:'#274d60'}} onClick={() => setIsEdit(true)}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
