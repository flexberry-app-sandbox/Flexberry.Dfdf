﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dfdf
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "Код as \'Код\'",
            "Фио as \'Фио\'"})]
    [View("СотрудникиL", new string[] {
            "Код as \'Код\'",
            "Фио as \'Фио\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fФио;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Код CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Код Get start)

                // *** End programmer edit section *** (Сотрудники.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Сотрудники.Код Get end)

                // *** End programmer edit section *** (Сотрудники.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Код Set start)

                // *** End programmer edit section *** (Сотрудники.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Сотрудники.Код Set end)

                // *** End programmer edit section *** (Сотрудники.Код Set end)
            }
        }
        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фио CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фио Get start)

                // *** End programmer edit section *** (Сотрудники.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (Сотрудники.Фио Get end)

                // *** End programmer edit section *** (Сотрудники.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фио Set start)

                // *** End programmer edit section *** (Сотрудники.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (Сотрудники.Фио Set end)

                // *** End programmer edit section *** (Сотрудники.Фио Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Dfdf.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Dfdf.Сотрудники));
                }
            }
        }
    }
}
