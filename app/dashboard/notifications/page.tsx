'use client';

import { Bell, Check, X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Email processed successfully',
      message: 'Your email from john@example.com has been analyzed and tasks extracted.',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'High priority task detected',
      message: 'A new high-priority task has been added to your dashboard.',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New feature available',
      message: 'Try our new AI-powered email categorization feature.',
      time: '1 hour ago',
      read: true
    },
    {
      id: 4,
      type: 'error',
      title: 'Connection issue',
      message: 'Unable to sync with Gmail. Please check your connection.',
      time: '2 hours ago',
      read: true
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'error': return <X className="w-5 h-5 text-red-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-inner">
            <Bell className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Notifications</h1>
            <p className="text-slate-500 text-sm">Stay updated with your email processing status</p>
          </div>
        </div>
        {unreadCount > 0 && (
          <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {unreadCount} new
          </div>
        )}
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-2xl shadow-sm border p-6 transition-all hover:shadow-md ${
              !notification.read ? 'border-blue-200 bg-blue-50/50' : 'border-slate-100'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-800">{notification.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-slate-400 mt-2">{notification.time}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" /> Mark read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-slate-400 hover:text-slate-600 text-xs"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-600">No notifications</h3>
          <p className="text-slate-400 text-sm">You're all caught up!</p>
        </div>
      )}
    </div>
  );
}