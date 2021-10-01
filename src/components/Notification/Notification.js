import React, { useEffect } from "react";
import classes from "./Notification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";

import { useSelector, useDispatch } from "react-redux";
import { deleteNotification } from "../../store/actions";

const Notification = () => {
  const dispatch = useDispatch();
  const notificationList = useSelector((state) => state.notificationList);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (notificationList.length) {
        handleDelete(notificationList[0].id);
      }
    }, 3000);
    return () => clearTimeout(timer);
  });

  const handleDelete = (id) => {
    dispatch(deleteNotification(id));
  };

  return (
    <div className={classes.wrapper}>
      {notificationList.map((notification) => (
        <div
          className={classes.notification_container}
          key={notification.id}
          style={{ backgroundColor: `${notification.modeProp.bgColor}` }}
        >
          {notification.modeProp.icon !== "" ? (
            <div className={classes.mode_icon}>
              <FontAwesomeIcon icon={notification.modeProp.icon} size="lg" />
            </div>
          ) : (
            ""
          )}
          <div className={classes.content}>
            <div className={classes.header}>
              <div className={classes.mode}>{notification.mode}</div>
            </div>
            <div style={{ textAlign: "end",marginRight:"20px" }}>{notification.text}</div>
          </div>
          <div
            onClick={() => handleDelete(notification.id)}
            className={classes.delete}
          >
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
